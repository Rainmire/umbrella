class Api::SessionsController < ApplicationController
  def create
    # user = User.from_omniauth(env["omniauth.auth"])
    auth_params = User.from_omniauth(request.env["omniauth.auth"])
    user = User.find_by(email: auth_params.email.to_s.downcase)

    if user
      token = auth_params.oauth_token
      user.oauth_token = token
      # login(@user)
      user.save!
    else
      token = ''
    end
    redirect_to 'umbrella://' + token
    # redirect_to 'umbrella://', session_token: user.oauth_token

  end

  def fetch_jwt
    debugger
    oauth_token = request.headers['oauth_token']

    if oauth_token.nil?
      render json: ["No oauth_token found in header"]
    else
      user = User.find_by(oauth_token: oauth_token)

      if user
        render json: ["You may only sign in from one device at a time."] if user.logged_in
        auth_token = JsonWebToken.encode({oauth_token: oauth_token})
        render json: {auth_token: auth_token}, status: :ok
      else
        render json: ["Session expired. Log in again."]
      end
    end
  end

  def destroy
    authenticate_request!

    @current_user.oauth_token = nil
    @current_user.provider = nil
    # session[:oauth_token] = nil
    @current_user.logged_in = false
    @current_user = nil
  end
end
