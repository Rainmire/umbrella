json.current_user_id @user.id

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :name, :profile_pic, :teacher_class, :contact
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
