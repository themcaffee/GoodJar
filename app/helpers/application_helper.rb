module ApplicationHelper
  def full_image_path(img_path)
    request.protocol + request.host_with_port + image_path(img_path)
  end
end
