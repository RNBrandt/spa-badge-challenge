class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all
  end

  def show
    @teacher = Teacher.find(params[:id])
    @badges = Badge.find_by(:teacher_id => params[:id])
  end
end
