
json.snaps(@snaps) do |snap|
    json.(snap, :id, :created_at)
    json.tests snap.tests do |testx|
        json.(testx, :id, :created_at)
        json.questions testx.questions do |question|
            json.(question, :id, :question_text,)
            json.answers question.answers do |answer|
                json.answer answer
            end
        end
    end
end
