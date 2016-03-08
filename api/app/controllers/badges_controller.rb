class BadgesController < ApplicationController

  def create
    @badge = Badge.new(:name => params[:name])
  end

  def update
    @badge = Badge.find(params[:id])
    if params[:vote] == 'up' #this will be the vote button class
      @badge.upvote
    else
      @badge.downvote
    end
  end

end
