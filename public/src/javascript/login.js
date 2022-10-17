let err = 0;
// submit form
const loginForm = () => {
    const userInput = $(".user-box").val();
    const passInput = $(".pass-box").val();

    $.ajax({
        url: `./api/login/?q=${encodeURIComponent(userInput)}`,
        method: "GET",
        cache: false,
        beforeSend: () => {
            fetch("./src/json/admin.json")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    for (let i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        if (userInput == data[i].username && passInput == data[i].password) {
                            window.location.href="/AdminPage"
                        }
                        else{
                            window.location.href="/AdminLogin"
                        }
                    }
                })
        }
        // ,
        // success: () => {
        //     setTimeout(() => {
        //     window.location.href="/AdminPage"}, 3000);
        // },
        // error: () => {

        // },
    });
};

$("#login-form").submit((e) => {
    e.preventDefault();
    loginForm();
  });