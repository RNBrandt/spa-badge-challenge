class BadgesController < ApplicationController

  def create
    @badge = Badge.new(:name => params[:name])
  end

  def update
    puts "-----"
    puts params
    @badge = Badge.find(params[:id])
    if params[:vote] == 'up' #this will be the vote button class
      @badge.upvote
    else
      @badge.downvote
    end
    @badges = Badge.where(teacher_id: params[:teacher_id])
    render json: @badges
  end

end
