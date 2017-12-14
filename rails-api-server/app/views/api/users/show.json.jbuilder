# json.extract! @user, :name, :email
json.children do
  @children.each do |child|
    json.set! child.id do
      json.extract! child, :name, :profile_pic
    end
  end
end

json.user do
  json.extract! @user, :id, :name, :profile_pic
end
