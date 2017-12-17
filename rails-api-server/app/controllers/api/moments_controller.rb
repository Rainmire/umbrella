class Api::MomentsController < ApplicationController

  def index
    @user = current_user
    if !@user
      render json: ["Not logged in"], status: 401
    end
    page = params[:page]
    if page
      targetMoment = @user.moments.find(page)
      if !targetMoment
        render json: ["Invalid page"], status: 403
    else

    end
  end

end
