class ApplicationController < ActionController::Base
  require 'json_web_token'

  protect_from_forgery with: :exception

  helper_method :current_user

  # def current_user
  #   # return User.first
  #   token = request.headers["Authorization"]
  #   return nil if token.nil?
  #   @current_user ||= User.find_by(oauth_token: token)
  # end

  # def login(user)
  #   session[:oauth_token] = user.oauth_token
  #   user.save!
  #   @current_user = user
  # end

  protected
  # Validates the token and user and sets the @current_user scope
  def authenticate_request!
    if !payload || !JsonWebToken.valid_payload(payload.first)
      return invalid_authentication
    end

    load_current_user!
    invalid_authentication unless @current_user
  end

  # Returns 401 response. To handle malformed / invalid requests.
  def invalid_authentication
    render json: {error: 'Invalid Request'}, status: :unauthorized
  end

  private
  # Deconstructs the Authorization header and decodes the JWT token.
  def payload
    auth_header = request.headers['Authorization']
    token = auth_header.split(' ').last
    JsonWebToken.decode(token)
  rescue
    nil
  end

  # Sets the @current_user with the user_id from payload
  def load_current_user!
    @current_user = User.find_by(oauth_token: payload[0]['oauth_token'])
  end
end
