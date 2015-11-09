module ApplicationHelper

  require 'date'

  def date_of_next(day)
    date  = Date.parse(day)
    delta = date > Date.today ? 0 : 7
    date + delta
  end

  def full_image_path(img_path)
    request.protocol + request.host_with_port + image_path(img_path)
  end
end
