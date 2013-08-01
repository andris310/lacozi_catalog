LacoziWh::Application.routes.draw do

  resources :categories


  resources :products


  root :to => 'products#home'
  get '/all-products', :to => 'products#index'
  get '/categories', :to => 'categories#index'
  get '/decorative-pillows', :to => 'products#decorative_pillows'
  get '/duvet-sets', :to => 'products#duvet_sets'
  get '/product-details', :to => 'products#details'


end
