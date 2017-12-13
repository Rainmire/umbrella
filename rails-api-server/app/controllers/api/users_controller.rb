class Api::UsersController < ApplicationController

  def show
    debugger
    @user = current_user
  end

end
