class Badge < ActiveRecord::Base
  belongs_to :teachers

  def upvote
    self.points += 1
    self.save
  end

  def downvote
    self.points -= 1
    self.save
  end

end
