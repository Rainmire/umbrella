require 'date'
# json.set! "events" do
#   @events.each do |event|
#     json.set! DateTime.parse(event.start_time).strftime("%Y-%m-%d") do
#       json.start_time DateTime.parse(event.start_time).strftime("%l:%M%p")
#       json.end_time DateTime.parse(event.end_time).strftime("%l:%M%p")
#       json.body event.body
#     end
#   end
# end

json.set! "events" do
  @events.each do |day|
    json.set! DateTime.parse(day.first.start_time).strftime("%Y-%m-%d") do
      json.array!(day) do |event|
        json.start_time DateTime.parse(event.start_time).strftime("%l:%M%p")
        json.end_time DateTime.parse(event.end_time).strftime("%l:%M%p")
        json.body event.body
      end
    end
  end
end

json.set! "markedDates" do
  @events.each do |day|
    json.set! DateTime.parse(day.first.start_time).strftime("%Y-%m-%d") do
      json.array!(day) do |event|
        unless event.key.nil?
          json.key event.key
          json.color event.color
        end
      end
    end
  end
end

# json.set! "markedDates" do
#   @events.each do |event|
#     unless event.key.nil?
#       json.set! DateTime.parse(event.start_time).strftime("%Y-%m-%d") do
#         json.key event.key
#         json.color
#       end
#     end
#   end
# end
