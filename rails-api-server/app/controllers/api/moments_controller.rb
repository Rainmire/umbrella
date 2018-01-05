class Api::MomentsController < ApplicationController
  before_action :authenticate_request!

  def create
    user = @current_user
    render json: {error: 'User is not a teacher'}, status: 401 if !user.teacher_class
    moment = Moment.new(body: params[:body], author_id: user.id, is_public: params[:is_public])
    render json: {error: 'Moment save failed'}, status: 400 if !moment.save
    params[:children].each do |child_id|
      membership = ChildMomentMembership.new(child_id: child_id, moment_id: moment.id)
      render json: {error: "Membership save failed"}, status: 400 if !membership.save
    end
  end

  def new_moments
    user = @current_user

    if user.teacher_class #user is teacher
      @moments = user.authored_moments.order(created_at: :desc).limit(10)
    else #user is parent
      child = user.children.find(params[:child_id])
      @moments = child.moments.order(created_at: :desc).limit(10)
    end
    render 'api/moments/show'
  end

  def more_moments
    user = @current_user

    if user.teacher_class #user is teacher
      target_moment = user.authored_moments.find(params[:id])
      @moments = user.authored_moments.where("moments.created_at < ?", target_moment.created_at).order(created_at: :desc).limit(10)
    else #user is parent
      child = user.children.find(params[:child_id])
      target_moment = child.moments.find(params[:id])
      @moments = child.moments.where("moments.created_at < ?", target_moment.created_at).order(created_at: :desc).limit(10)
    end
    render 'api/moments/show'
  end

  # private
  # def moment_params
  #   params.require(:moment).permit(:body)
  # end

end
