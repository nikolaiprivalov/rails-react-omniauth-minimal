Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  direct :new_user_session do
    root_path
  end

  root to: "home#index"
end
