# json.extract! @user, :name, :email
# json.children do
#   @children.each do |child|
#     json.set! child.id do
#       json.extract! child, :name, :profile_pic, :teacher_id
#     end
#   end
# end
json.current_user_id do
  json.extract! @user, :id
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :name, :profile_pic, :teacher_class
    end
  end
end

json.children do
  json.array!(@children) do |child|
    json.extract! child, :id, :name, :profile_pic, :teacher_id
  end
end

json.moments do
  json.array!(@moments) do |moment|
    json.extract! moment, :id, :body, :author_id, :created_at, :is_public
  end
end
