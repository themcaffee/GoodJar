desc 'send weekly email'
task send_weekly_email: :environment do
  @users = User.all
  @users.each do |user|
    UserMailer.weekly_email(user).deliver!
  end
end

desc 'send monthly email'
task send_monthly_email: :environment do
  @users = User.all
  @users.each do |user|
    UserMailer.montlhy_email(user).deliver!
  end
end

desc 'send yearly email'
task send_year_email: :environment do
  @users = User.all
  @users.each do |user|
    UserMailer.yearly_email(user).deliver!
  end
end