Rails.application.routes.draw do
  # get 'posts', to: 'posts#index'
  root to: "posts#index"
  post 'posts', to: 'posts#create'
  # get "posts", to: "posts#checked"
  get "posts/:id", to: "posts#checked"
end
