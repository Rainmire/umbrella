json.moments do
  json.array!(@moments) do |moment|
    json.extract! moment, :id, :body, :author_id, :created_at, :is_public, :image_url
  end
end
