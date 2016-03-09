class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
    @json_object = @teachers.to_json
    render json: @json_object
  end

  def show
    @teacher = Teacher.find(params[:id])
    @badges = Badge.where(:teacher_id => params[:id])
    render json: @badges
  end
end
