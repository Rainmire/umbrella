json.moments do
  json.array!(@moments) do |moment|
    json.extract! moment, :id, :body, :image_url, :author_id, :created_at, :is_public
  end
end
