class Api::FriendshipsController < ApplicationController
    before_action :require_login
    
    def create 
        @friendship = Friendship.new(friendship_params)

        if @current_user.id.to_s != @friendship.user_one_id.to_s and @current_user.id.to_s != @friendship.user_two_id.to_s
            render json: ["dont make friendships for people who arent you"], status:422 and return
        elsif @friendship.user_one_id == @friendship.user_two_id 
            render json: ["cant be own friend"], status:422 and return
        elsif @friendship.user_one_id == nil or @friendship.user_two_id==nil
            render json: ["one of the friends is a nil user"], status:422 and return
        elsif @friendship.user_one_id.to_i > @friendship.user_two_id.to_i
            @friendship.user_one_id, @friendship.user_two_id = 
            @friendship.user_two_id, @friendship.user_one_id
        end 

        if @friendship.save
            render "api/friendships/show"
        else 
            # p @friendship.errors.full_messages
            render json: @friendship.errors.full_messages, status:422
        end
    end
        
    def destroy
        @friendship = Friendship.find[:id]
        if (current_user.id.to_s == @friendship.user_one_id.to_s || current_user.id.to_s == @friendship.user_two_id.to_s)
            @friendship.destroy!
            render json: ["destroyed friendship betwixt #{@friendship.user_one_id} and #{@friendship.user_two_id}"],status:422
        else
            render json: ["destroy failure"], status:422
        end
        # redirect_to "api/friendships/index"
    end

    def index
        @friendships = Friendship.where("user_one_id = ? OR user_two_id = ?", current_user.id.to_s, current_user.id.to_s)
        render "api/friendships/index"
    end

    private
    def friendship_params
        params.require(:friendship).permit!

        # params.require(:friendship).permit(:user_one_id, :user_two_id)
    end
end

# $.ajax({
#         method: 'POST',
#         url: '/api/friendships',
#         data: {friendship: {user_one_id: 1, user_two_id: 2}}
#     })

