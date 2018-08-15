TestScore.destroy_all
User.destroy_all
Snap.destroy_all
Test.destroy_all
Question.destroy_all
Answer.destroy_all



beck_dep_inventory = Test.new
beck_dep_inventory.name = "Beck Depression Inventory"
beck_dep_inventory.max_score = 63
beck_dep_inventory.save

beck_question_1 = Question.new
beck_question_1.question_text = "1"
beck_question_1.test_id = beck_dep_inventory.id
beck_question_1.save

beck_question_1.answers.create(answer_text: "I do not feel sad.", answer_value: 0)
beck_question_1.answers.create(answer_text: "I feel sad.", answer_value: 1)
beck_question_1.answers.create(answer_text: "I am sad all the time and I can't snap out of it.", answer_value: 2)
beck_question_1.answers.create(answer_text: "I am so sad and unhappy that I can't stand it.", answer_value: 3)

beck_question_2 = Question.new
beck_question_2.question_text = "2"
beck_question_2.test_id = beck_dep_inventory.id
beck_question_2.save

beck_question_2.answers.create(answer_text: "I am not particularly discouraged about the future. ", answer_value: 0)
beck_question_2.answers.create(answer_text: "I feel discouraged about the future. ", answer_value: 1)
beck_question_2.answers.create(answer_text: "I feel I have nothing to look forward to.", answer_value: 2)
beck_question_2.answers.create(answer_text: "I feel the future is hopeless and that things cannot improve.", answer_value: 3)

beck_question_3 = Question.new
beck_question_3.question_text = "3"
beck_question_3.test_id = beck_dep_inventory.id
beck_question_3.save

beck_question_3.answers.create(answer_text: "I do not feel like a failure. ", answer_value: 0)
beck_question_3.answers.create(answer_text: "I feel I have failed more than the average person.", answer_value: 1)
beck_question_3.answers.create(answer_text: "As I look back on my life, all I can see is a lot of failures.", answer_value: 2)
beck_question_3.answers.create(answer_text: "I feel I am a complete failure as a person.", answer_value: 3)

beck_question_4 = Question.new
beck_question_4.question_text = "4"
beck_question_4.test_id = beck_dep_inventory.id
beck_question_4.save

beck_question_4.answers.create(answer_text: "I get as much satisfaction out of things as I used to.", answer_value: 0)
beck_question_4.answers.create(answer_text: "I don't enjoy things the way I used to. ", answer_value: 1)
beck_question_4.answers.create(answer_text: "I don't get real satisfaction out of anything anymore. ", answer_value: 2)
beck_question_4.answers.create(answer_text: "I am dissatisfied or bored with everything.", answer_value: 3)

beck_question_5 = Question.new
beck_question_5.question_text = "5"
beck_question_5.test_id = beck_dep_inventory.id
beck_question_5.save

beck_question_5.answers.create(answer_text: "I don't feel particularly guilty", answer_value: 0)
beck_question_5.answers.create(answer_text: "I feel guilty a good part of the time. ", answer_value: 1)
beck_question_5.answers.create(answer_text: "I feel quite guilty most of the time.", answer_value: 2)
beck_question_5.answers.create(answer_text: "I feel guilty all of the time. ", answer_value: 3)

beck_question_6 = Question.new
beck_question_6.question_text = "6"
beck_question_6.test_id = beck_dep_inventory.id
beck_question_6.save

beck_question_6.answers.create(answer_text: "I don't feel I am being punished. ", answer_value: 0)
beck_question_6.answers.create(answer_text: "I feel I may be punished. ", answer_value: 1)
beck_question_6.answers.create(answer_text: "I expect to be punished.", answer_value: 2)
beck_question_6.answers.create(answer_text: "I feel I am being punished. ", answer_value: 3)

beck_question_7 = Question.new
beck_question_7.question_text = "7"
beck_question_7.test_id = beck_dep_inventory.id
beck_question_7.save

beck_question_7.answers.create(answer_text: "I don't feel disappointed in myself. ", answer_value: 0)
beck_question_7.answers.create(answer_text: "I am disappointed in myself.", answer_value: 1)
beck_question_7.answers.create(answer_text: "I am disgusted with myself. ", answer_value: 2)
beck_question_7.answers.create(answer_text: "I hate myself.", answer_value: 3)

beck_question_8 = Question.new
beck_question_8.question_text = "8"
beck_question_8.test_id = beck_dep_inventory.id
beck_question_8.save

beck_question_8.answers.create(answer_text: "I don't feel I am any worse than anybody else.", answer_value: 0)
beck_question_8.answers.create(answer_text: "I am critical of myself for my weaknesses or mistakes. ", answer_value: 1)
beck_question_8.answers.create(answer_text: "I blame myself all the time for my faults. ", answer_value: 2)
beck_question_8.answers.create(answer_text: "I blame myself for everything bad that happens. ", answer_value: 3)

beck_question_9 = Question.new
beck_question_9.question_text = "9"
beck_question_9.test_id = beck_dep_inventory.id
beck_question_9.save

beck_question_9.answers.create(answer_text: "I don't have any thoughts of killing myself. ", answer_value: 0)
beck_question_9.answers.create(answer_text: "I have thoughts of killing myself, but I would not carry them out. ", answer_value: 1)
beck_question_9.answers.create(answer_text: "I would like to kill myself.", answer_value: 2)
beck_question_9.answers.create(answer_text: "I would kill myself if I had the chance. ", answer_value: 3)

beck_question_10 = Question.new
beck_question_10.question_text = "10"
beck_question_10.test_id = beck_dep_inventory.id
beck_question_10.save

beck_question_10.answers.create(answer_text: "I don't cry any more than usual. ", answer_value: 0)
beck_question_10.answers.create(answer_text: "I cry more now than I used to. ", answer_value: 1)
beck_question_10.answers.create(answer_text: "I cry all the time now. ", answer_value: 2)
beck_question_10.answers.create(answer_text: "I used to be able to cry, but now I can't cry even though I want to.", answer_value: 3)

beck_question_11 = Question.new
beck_question_11.question_text = "11"
beck_question_11.test_id = beck_dep_inventory.id
beck_question_11.save

beck_question_11.answers.create(answer_text: "I am no more irritated by things than I ever was.", answer_value: 0)
beck_question_11.answers.create(answer_text: "I am slightly more irritated now than usual.", answer_value: 1)
beck_question_11.answers.create(answer_text: "I am quite annoyed or irritated a good deal of the time.", answer_value: 2)
beck_question_11.answers.create(answer_text: "I feel irritated all the time.", answer_value: 3)

beck_question_12 = Question.new
beck_question_12.question_text = "12"
beck_question_12.test_id = beck_dep_inventory.id
beck_question_12.save

beck_question_12.answers.create(answer_text: "I have not lost interest in other people.", answer_value: 0)
beck_question_12.answers.create(answer_text: "I am less interested in other people than I used to be.", answer_value: 1)
beck_question_12.answers.create(answer_text: "I have lost most of my interest in other people.", answer_value: 2)
beck_question_12.answers.create(answer_text: "I have lost all of my interest in other people. ", answer_value: 3)

beck_question_13 = Question.new
beck_question_13.question_text = "13"
beck_question_13.test_id = beck_dep_inventory.id
beck_question_13.save

beck_question_13.answers.create(answer_text: "I make decisions about as well as I ever could. ", answer_value: 0)
beck_question_13.answers.create(answer_text: "I put off making decisions more than I used to.", answer_value: 1)
beck_question_13.answers.create(answer_text: "I have greater difficulty in making decisions more than I used to.", answer_value: 2)
beck_question_13.answers.create(answer_text: "I can't make decisions at all anymore.", answer_value: 3)

beck_question_14 = Question.new
beck_question_14.question_text = "14"
beck_question_14.test_id = beck_dep_inventory.id
beck_question_14.save

beck_question_14.answers.create(answer_text: "I don't feel that I look any worse than I used to.", answer_value: 0)
beck_question_14.answers.create(answer_text: "I am worried that I am looking old or unattractive. ", answer_value: 1)
beck_question_14.answers.create(answer_text: "I feel there are permanent changes in my appearance that make me look unattractive.", answer_value: 2)
beck_question_14.answers.create(answer_text: "I believe that I look ugly. ", answer_value: 3)



beck_question_15 = Question.new
beck_question_15.question_text = "15"
beck_question_15.test_id = beck_dep_inventory.id
beck_question_15.save

beck_question_15.answers.create(answer_text: "I can work about as well as before.", answer_value: 0)
beck_question_15.answers.create(answer_text: "It takes an extra effort to get started at doing something.", answer_value: 1)
beck_question_15.answers.create(answer_text: "I have to push myself very hard to do anything. ", answer_value: 2)
beck_question_15.answers.create(answer_text: "I can't do any work at all. ", answer_value: 3)

beck_question_16 = Question.new
beck_question_16.question_text = "16"
beck_question_16.test_id = beck_dep_inventory.id
beck_question_16.save

beck_question_16.answers.create(answer_text: "I can sleep as well as usual. ", answer_value: 0)
beck_question_16.answers.create(answer_text: "I don't sleep as well as I used to.", answer_value: 1)
beck_question_16.answers.create(answer_text: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", answer_value: 2)
beck_question_16.answers.create(answer_text: "I wake up several hours earlier than I used to and cannot get back to sleep.", answer_value: 3)

beck_question_17 = Question.new
beck_question_17.question_text = "17"
beck_question_17.test_id = beck_dep_inventory.id
beck_question_17.save

beck_question_17.answers.create(answer_text: "I don't get more tired than usual.", answer_value: 0)
beck_question_17.answers.create(answer_text: "I get tired more easily than I used to.", answer_value: 1)
beck_question_17.answers.create(answer_text: "I get tired from doing almost anything.", answer_value: 2)
beck_question_17.answers.create(answer_text: "I am too tired to do anything.", answer_value: 3)

beck_question_18 = Question.new
beck_question_18.question_text = "18"
beck_question_18.test_id = beck_dep_inventory.id
beck_question_18.save

beck_question_18.answers.create(answer_text: "My appetite is no worse than usual.", answer_value: 0)
beck_question_18.answers.create(answer_text: "My appetite is not as good as it used to be.", answer_value: 1)
beck_question_18.answers.create(answer_text: "My appetite is much worse now.", answer_value: 2)
beck_question_18.answers.create(answer_text: "I have no appetite at all anymore.", answer_value: 3)

beck_question_19 = Question.new
beck_question_19.question_text = "19"
beck_question_19.test_id = beck_dep_inventory.id
beck_question_19.save

beck_question_19.answers.create(answer_text: "I haven't lost much weight, if any, lately.", answer_value: 0)
beck_question_19.answers.create(answer_text: "I have lost more than five pounds.", answer_value: 1)
beck_question_19.answers.create(answer_text: "I have lost more than ten pounds.", answer_value: 2)
beck_question_19.answers.create(answer_text: "I have lost more than fifteen pounds.", answer_value: 3)

beck_question_20 = Question.new
beck_question_20.question_text = "20"
beck_question_20.test_id = beck_dep_inventory.id
beck_question_20.save

beck_question_20.answers.create(answer_text: "I am no more worried about my health than usual.", answer_value: 0)
beck_question_20.answers.create(answer_text: "I am worried about physical problems like aches, pains, upset stomach, or constipation.", answer_value: 1)
beck_question_20.answers.create(answer_text: "I am very worried about physical problems and it's hard to think of much else.", answer_value: 2)
beck_question_20.answers.create(answer_text: "I am so worried about my physical problems that I cannot think of anything else.", answer_value: 3)

beck_question_21 = Question.new
beck_question_21.question_text = "21"
beck_question_21.test_id = beck_dep_inventory.id
beck_question_21.save

beck_question_21.answers.create(answer_text: "I have not noticed any recent change in my interest in sex.", answer_value: 0)
beck_question_21.answers.create(answer_text: "I am less interested in sex than I used to be.", answer_value: 1)
beck_question_21.answers.create(answer_text: "I have almost no interest in sex.", answer_value: 2)
beck_question_21.answers.create(answer_text: "I have lost interest in sex completely.", answer_value: 3)

social_interaction_anxiety = Test.new
social_interaction_anxiety.name = "Social Interaction Anxiety Scale"
social_interaction_anxiety.max_score = 20
social_interaction_anxiety.save

social_interaction_anxiety_question_1 = Question.new
social_interaction_anxiety_question_1.question_text = "I get nervous if I have to speak with someone in authority (teacher, boss)."
social_interaction_anxiety_question_1.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_1.save

social_interaction_anxiety_question_1.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_1.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_1.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_1.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_1.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_2 = Question.new
social_interaction_anxiety_question_2.question_text = "I have difficulty making eye contact with others."
social_interaction_anxiety_question_2.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_2.save

social_interaction_anxiety_question_2.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_2.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_2.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_2.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_2.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_3 = Question.new
social_interaction_anxiety_question_3.question_text = "I become tense if I have to talk about myself or my feelings."
social_interaction_anxiety_question_3.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_3.save

social_interaction_anxiety_question_3.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_3.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_3.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_3.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_3.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_4 = Question.new
social_interaction_anxiety_question_4.question_text = "I find it difficult to mix comfortably with the people I work with."
social_interaction_anxiety_question_4.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_4.save

social_interaction_anxiety_question_4.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_4.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_4.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_4.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_4.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_5 = Question.new
social_interaction_anxiety_question_5.question_text = "I find it easy to make friends my own age."
social_interaction_anxiety_question_5.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_5.save

social_interaction_anxiety_question_5.answers.create(answer_text: "NOT AT ALL", answer_value: 4)
social_interaction_anxiety_question_5.answers.create(answer_text: "SLIGHTLY", answer_value: 3)
social_interaction_anxiety_question_5.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_5.answers.create(answer_text: "VERY", answer_value: 1)
social_interaction_anxiety_question_5.answers.create(answer_text: "EXTREMELY", answer_value: 0)


dostoevsky = User.new
dostoevsky.name = "Fyodor Dostoevsky"
dostoevsky.age = 45
dostoevsky.save

dostoevsky1 = Snap.new
dostoevsky1.user_id = dostoevsky.id

first_first_beck_answer = Answer.where(question_id: beck_question_1.id, answer_value: 3)
first_second_beck_answer = Answer.where(question_id: beck_question_2.id, answer_value: 3)
first_third_beck_answer = Answer.where(question_id: beck_question_3.id, answer_value: 3)
first_fourth_beck_answer = Answer.where(question_id: beck_question_4.id, answer_value: 3)
first_fifth_beck_answer = Answer.where(question_id: beck_question_5.id, answer_value: 3)

dostoevsky1.answers << first_first_beck_answer
dostoevsky1.answers << first_second_beck_answer
dostoevsky1.answers << first_third_beck_answer
dostoevsky1.answers << first_fourth_beck_answer
dostoevsky1.answers << first_fifth_beck_answer
dostoevsky1.save

test_score_1 = TestScore.new
test_score_1.score_total = 15
test_score_1.user_id = dostoevsky.id
test_score_1.snap_id = dostoevsky1.id
test_score_1.test_id = beck_dep_inventory.id
test_score_1.save

dostoevsky2 = Snap.new
dostoevsky2.user_id = dostoevsky.id

second_first_beck_answer = Answer.where(question_id: beck_question_1.id, answer_value: 1)
second_second_beck_answer = Answer.where(question_id: beck_question_2.id, answer_value: 1)
second_third_beck_answer = Answer.where(question_id: beck_question_3.id, answer_value: 1)
second_fourth_beck_answer = Answer.where(question_id: beck_question_4.id, answer_value: 1)

dostoevsky2.answers << second_first_beck_answer
dostoevsky2.answers << second_second_beck_answer
dostoevsky2.answers << second_third_beck_answer
dostoevsky2.answers << second_fourth_beck_answer
dostoevsky2.save


















