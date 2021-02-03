class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token

  def destroy
    super do |user|
      render json: { status: 200, logged_out: true } and return
    end
  end

  private

  def respond_to_on_destroy
    binding.pry
  end
end
