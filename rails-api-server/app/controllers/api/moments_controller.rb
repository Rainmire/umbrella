class Api::MomentsController < ApplicationController
  before_action :authenticate_request!

  # def index
  #   # @user = current_user
  #   # if !@user
  #   #   render json: ["Not logged in"], status: 401
  #   # end
  #   # page = params[:page]
  #   # if page
  #   #   target_moment = @user.moments.find(page)
  #   #   if !target_moment
  #   #     render json: ["Invalid page"], status: 403
  #   #   else
  #   #     targetTimestamp = target_moment.created_at
  #   #     @user.moments.where("moments.created_at < )
  #   #
  #   #
  #   #
  #   #   end
  #   #
  #   # else
  #   #
  #   # end
  #
  #
  #
  # end

  def new_moments
    user = @current_user
    if !user
      render json: ["Not logged in"], status: 401
    end

    if user.teacher_class #user is teacher
      target_moment = user.authored_moments.find(params[:id])
      @moments = user.authored_moments.where("moments.created_at < ?", target_moment.created_at).order(created_at: :desc)
    else #user is parent
      child = user.children.find(params[:child_id])
      target_moment = child.moments.find(params[:id])
      @moments = child.moments.where("moments.created_at < ?", target_moment.created_at).order(created_at: :desc)
    end
    render 'api/moments/show'
  end

  def more_moments
    user = @current_user
    if !user
      render json: ["Not logged in"], status: 401
    end

    if user.teacher_class #user is teacher
      target_moment = user.authored_moments.find(params[:id])
      @moments = user.authored_moments.where("moments.created_at > ?", target_moment.created_at).order(created_at: :desc).limit(10)
    else #user is parent
      child = user.children.find(params[:child_id])
      target_moment = child.moments.find(params[:id])
      @moments = child.moments.where("moments.created_at > ?", target_moment.created_at).order(created_at: :desc).limit(10)
    end
    render 'api/moments/show'
  end

end
