$(document).ready(function() {
  // Getting an PostId
  var url = window.location.search;
  var postId;
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    
  }
  console.log("Post ID: ", postId);
  //-------------------

  // Getting references to the name input and author container, as well as the table body
  var usernameInput = $("#username-body");
  var commentInput = $("#comment-body");
  var commentList = $(".comment-place");
  var commentContainer = $(".comment-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#comment-form", handleCommentFormSubmit);
  /* $(document).on("click", ".delete-comment", handleDeleteButtonPress); */

  // Getting the initial list of Authors
  getComments();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleCommentFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!usernameInput.val().trim().trim() || !commentInput.val().trim().trim()) {
      return;
    }

    // Calling the upsertAuthor function and passing in the value of the name input
    upsertComment({
      username: usernameInput
        .val()
        .trim(),
      body: commentInput
        .val()
        .trim(),
      PostId : postId
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertComment(commentData) {
    $.post("/api/comments", commentData)
      .then(getComments);
  }

  // Function for creating a new list row for authors
  function createCommentRow(commentData) {
    var formattedDate = new Date(commentData.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newCommentCard = $("<div>");
    newCommentCard.addClass("card");
    var newCommentCardHeading = $("<div>");
    newCommentCardHeading.addClass("card-header");
    var newCommentUsername = $("<h4>");
    var newCommentDate = $("<small>");
    
    var newCommentCardBody = $("<div>");
    newCommentCardBody.addClass("card-body");
    var newCommentBody = $("<h5>");
    
    
    newCommentUsername.text(commentData.username + " ");
    newCommentBody.text(commentData.body);
    newCommentDate.text(formattedDate);

    newCommentUsername.append("<br>").append(newCommentDate);
    
    newCommentCardHeading.append(newCommentUsername);
    
    newCommentCardBody.append(newCommentBody);
    newCommentCard.append(newCommentCardHeading);
    newCommentCard.append(newCommentCardBody);
    return newCommentCard;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getComments() {
    console.log("Get Comment Initiated");
    //postId = "/?post_id=" + postId;
    $.get("/api/comments/" + postId, function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        console.log("Data[" + i + "]: ", data[i]);
        rowsToAdd.push(createCommentRow(data[i]));
      }
      console.log("Rows To Add: ", rowsToAdd);
      renderCommentList(rowsToAdd);
      usernameInput.val("");
      commentInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderCommentList(rows) {
    commentList.children().not(":last").remove();
    commentContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      commentList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("No Comments So Far");
    commentContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
/*   function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  } */
});
