class Api::ChildrenController < ApplicationController
  before_action :authenticate_request!

  def show
    @child = @current_user.children.find(params[:id])
    if @child
      @moments = @child.moments
      render 'api/children/show'
    else
      render json: ["No child found"], status: 403
    end
  end
end
