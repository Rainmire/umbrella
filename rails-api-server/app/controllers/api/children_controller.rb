class Api::ChildrenController < ApplicationController
  def show
    # @child = current_user.children.find(params[:id])
    @child = User.first.children.find(params[:id])
    if @child
      @teacher = @child.teacher
      # debugger
      render 'api/children/show'
    else
      render json: ["No child found"], status: 404
    end
  end
end
