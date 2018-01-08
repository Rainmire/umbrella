require 'date'

json.array!(@events) do |event|

  json.date event.date
  json.start_time DateTime.parse(event.start_time).strftime("%l:%M%p")
  json.end_time DateTime.parse(event.end_time).strftime("%l:%M%p")
  json.body event.body
end
