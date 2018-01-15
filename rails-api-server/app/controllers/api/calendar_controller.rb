require 'date'

class Api::CalendarController < ApplicationController
  before_action :authenticate_request!

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

    @events = CalendarEvent.where("date = ? OR date = ?", month1, month2).order(start_time: :desc)
  end

end
