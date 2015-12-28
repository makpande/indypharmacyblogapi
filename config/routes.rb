Rails.application.routes.draw do

  match '*all', to: 'application#preflight', via: [:options]

  devise_for :user, only: []

  namespace :v1, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
  end

  # get 'current_user', to: 'application#current_user'
  # get 'request_token', to: 'tokens#request_token'
  # get 'access_token', to: 'tokens#access_token'

  resources :posts, only:[:index, :create, :save]

end
