class BadgesController < ApplicationController

  def create
    @badge = Badge.create!(badge_params)
    p badge_params
    @badges = Badge.where(teacher_id: params[:teacher_id]).order(points: :desc, created_at: :asc)
    render json: @badges
  end

  def update
    puts "-----"
    puts badge_params
    @badge = Badge.find(params[:id])
    if badge_params[:vote] == 'up' #this will be the vote button class
      @badge.upvote
    else
      @badge.downvote
    end
    @badges = Badge.where(teacher_id: params[:teacher_id]).order(points: :desc, created_at: :asc)
    render json: @badges
  end
 private
  def badge_params
    params.require(:badge).permit(:vote, :name, :id, :teacher_id)
  end
end
