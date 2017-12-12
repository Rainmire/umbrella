class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:oauth_token]) if session[:oauth_token]
  end

  def login(user)
    session[:oauth_token] = user.oauth_token
    user.save!
    @current_user = user
  end
end
