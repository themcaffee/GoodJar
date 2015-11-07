# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = CreateAdminService.new.call
puts 'CREATED ADMIN USER: ' << user.email

Post.create( content: "Found the coat I thought I lost.", user_id: 1, created_at: "2015-10-30 00:00:00.000000")
puts 'CREATED POST 1'
Post.create( content: "Got a complement on my hat.", user_id: 1, created_at: "2015-10-30 00:00:00.000000")
puts 'CREATED POST 2'