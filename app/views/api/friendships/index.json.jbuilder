# json.array! (@friendships) do |friendship|
@friendships.each do |friendship|
    json.set! friendship.id do
        json.extract! friendship, :user_one_id, :user_two_id, :id
        if friendship.user_one.username != current_user.username
            json.friends_name friendship.user_one.username
        else 
            json.friends_name friendship.user_two.username
        end
    end
end