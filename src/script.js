function validateFeedback() {
    if (document.feedbackForm.name.value == "") {
        alert("Name must be filled out");
        document.feedbackForm.name.focus();
        return false;
    }
    if (document.forms.feedbackForm.fback.value == "") {
        alert("Please provide some feedback");
        document.feedbackForm.fback.focus();
        return false;
    }
    return true;
}


function validateApply() {
    console.log('here');
    if (document.applyForm.fname.value == "") {
        alert("First name must be filled out");
        document.applyForm.fname.focus();
        return false;
    }
    if (document.applyForm.email.value == "") {
        alert("Email must be filled out");
        document.applyForm.email.focus();
        return false;
    }
    if (document.applyForm.cv.value == "") {
        alert("Please upload your CV");
        return false;
    }

    return true;
}