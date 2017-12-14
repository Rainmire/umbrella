Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    # get '/user', to: 'users#show', as: 'user'
    resource :user, only: [:show]
    resource :session, only: [:destroy]
    # delete 'session', to: 'sessions#destroy'
    resources :children, only: [:show]
  end

  get 'auth/:provider/callback', to: 'api/sessions#create'
  get 'auth/failure', to: redirect('/')
  # get 'signout', to: 'api/sessions#destroy', as: 'signout'

  resource :home, only: [:show]

  root to: "home#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
