import "./auth.scss";
export function setRegister(element: HTMLDivElement) {
  element.innerHTML = `
    <div class="container">
        <form class="registration-form">
            <h1>Регистрация</h1>
            <div class="form-group">
                <label for="email">Почта:</label>
                <input type="email" id="email" name="email" placeholder="Введите вашу почту">
            </div>
            <div class="form-group">
                <label for="login">Ваш логин:</label>
                <input type="text" id="login" name="login" placeholder="Введите ваш логин" >
            </div>
            <div class="form-group">
                <label for="first_name">Ваше имя:</label>
                <input type="text" id="first_name" name="first_name" placeholder="Введите ваше имя:" >
            </div>
              <div class="form-group">
                <label for="second_name
                >Ваше имя:</label>
                <input type="text" id="second_name" name="second_name"
                 placeholder="Введите ваше фамилие:"required>
            </div>
             <div class="form-group">
                <label for="phone">Ваш номер телефона:</label>
                <input type="tel" id="phone" name="phone"
                 placeholder="Введите ваш номер телефона:"required>
            </div>
          
                <input type="file" id="avatar" name="avatar" >
            

            <div class="form-group">
                <label for="password">Ваш пароль:</label>
                <input type="password" id="password" name="password" placeholder="Create a password" required>
                <span class="show-password" onclick="togglePassword()">Show</span>
            </div>
            <div class="form-group">
                <label for="password_again">Повторите пароль:</label>
                <input type="password" id="password_again" name="password_again" placeholder="Повторите пароль" required>

            </div>
            <button type="submit" id="register-button">Зарегистрироваться</button>
            <a>Войти</a>
        </form>

    </div>
`;
}
