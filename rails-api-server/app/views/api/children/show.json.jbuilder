json.teacher do
  json.extract! @child.teacher, :id, :name, :teacher_class, :profile_pic, :contact
end

json.moments do
  @child.moments.each do |moment|
    json.set! moment.id do
      json.extract! moment, :body, :author_id, :created_at
    end
  end
end
