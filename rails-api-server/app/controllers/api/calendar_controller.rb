require 'date'

class Api::CalendarController < ApplicationController
  # before_action :authenticate_request!

  def create
    if @current_user.techer_class.nil?
      render json: {error: "User is not a teacher"}, status: 403
    end

    start_time = DateTime.parse("#{params[:date]} #{params[:start_time]}").to_s
    end_time = DateTime.parse("#{params[:date]} #{params[:end_time]}").to_s
    date = DateTime.parse(params[:date]).strftime("%Y-%m")

    calendar_event = CalendarEvent.new(
      date: date,
      start_time: start_time,
      end_time: end_time,
      body: params[:body],
      dot: params[:color],
      key: params[:key]
    )

    if calendar_event.save
      render status: :ok
    else
      render status: 400
    end
  end

  # def daily_events
  #   @events = CalendarEvent.where(date: params[:date]).order(:start_time)
  #   render 'api/calendar/show'
  # end

  def monthly_events
    month1 = DateTime.parse(params[:date]).strftime("%Y-%m")
    month2 = (DateTime.parse(params[:date]) >> 1).strftime("%Y-%m")

    # target_month1 = DateTime.parse(params[:date]).strftime("%Y-%m")

    # @events = CalendarEvent.where("date = ? OR date = ?", month1, month2).order(start_time: :desc)

    #################################

    selected_events = CalendarEvent.all.order(:start_time).select do |event|
      event_month = DateTime.parse(event.start_time).strftime("%Y-%m")
      event_month == month1 || event_month == month2
    end

    @events = []
    prev_day = nil

    selected_events.each do |event|
      curr_day = DateTime.parse(event.start_time).strftime("%Y-%m-%d")
      if prev_day == curr_day
        @events.last << event
      else
        @events << [event]
        prev_day = curr_day
      end
    end

    debugger

    render 'api/calendar/show'
    # debugger
  end

end
