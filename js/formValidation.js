$(function() {
    $("form[name='forma']").validate({
      wrapper: 'div',
      errorLabelContainer: "#messageBox",
      debug: false,
      rules: {
        ime: "required",
        email: {
          required: true,
          email: true
        },
        prezime: "required",
        poruka: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        ime: "Unesite ime",
        email: "Neispravno unešen e-mail",
        poruka: {
          required: "Unesite vašu poruku",
          minlength: "Poruka treba imati barem 5 karaktera"
        },
        prezime: "Unesite prezime"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
  