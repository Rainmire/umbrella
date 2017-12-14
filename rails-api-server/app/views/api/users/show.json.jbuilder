# json.extract! @user, :name, :email

@children.each do |child|
  json.set! child.id do
    json.extract! child, :name, :profile_pic
  end
end
