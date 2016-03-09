# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Teacher.delete_all
Badge.delete_all
Teacher.create(name: "Anne")
Teacher.create(name: "Derek")
Teacher.create(name: "Hunter")
Teacher.create(name: "Jen" )
Teacher.create(name: "Julian")
Teacher.create(name: "Sarah")
Teacher.create(name: "Shambhavi")
Teacher.create(name: "Walker")


Teacher.all.each do |teacher|
  10.times do
    teacher.badges << Badge.create(name: Faker::StarWars.quote)
  end
end




