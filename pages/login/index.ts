export const Login = (): string => {
    return `
    <div class="col-12" style="height: 76vh">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-12 col-lg-7">
                <div class="login-wrap">
                    <form action="#" class="signin-form d-md-flex">
                        <div class="half p-4 py-md-5">
                            <div class="w-100">
                                <h3 class="mb-4">Sign In</h3>
                            </div>
                            <div class="form-group mt-3">
                                <label class="label" for="name">Username</label>
                                <input type="text" class="form-control" placeholder="Username" required="">
                            </div>
                            <div class="form-group">
                                <label class="label" for="password">Password</label>
                                <input id="password-field" type="password" class="form-control" placeholder="Password"
                                    required="">
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                        </div>
                        <div class="half p-4 py-md-5 bg-primary">
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-secondary rounded submit px-3">Sign me in
                                    now</button>
                            </div>
                            <div class="form-group d-md-flex">
                                <div class="w-50 text-left">
                                    <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                        <input type="checkbox" checked="">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="w-50 text-md-right">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </div>
                            <p class="w-100 text-center" style="color:white;">— Or Sign In With —</p>
                            <div class="w-100">
                                <p class="social-media d-flex justify-content-center">
                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span
                                            class="fa fa-facebook"></span></a>
                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span
                                            class="fa fa-twitter"></span></a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
};