
-- Supprimer les tables existantes pour les questions et options
DROP TABLE IF EXISTS public.question_options CASCADE;
DROP TABLE IF EXISTS public.questions CASCADE;

-- Modifier la table quizzes pour stocker les informations de catégories
ALTER TABLE public.quizzes 
ADD COLUMN IF NOT EXISTS category_info TEXT NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS context_data JSONB DEFAULT '{}';

-- Mettre à jour les quiz existants avec les informations de catégories
UPDATE public.quizzes 
SET category_info = CASE 
  WHEN title = 'Histoire du CEERA' THEN 'Le CEERA (Collectif des Élèves et Étudiants Ressortissants d''Agnibilékrou) a été officiellement fondé le 03 février 2023. C''est une association apolitique, laïque et à but non lucratif basée principalement à Abidjan avec une section opérationnelle à Bouaké. L''objectif principal est de rassembler la jeunesse d''Agnibilékrou, notamment après le baccalauréat, lorsque les étudiants se dispersent vers diverses universités. Le CEERA compte actuellement deux sections actives et vise à maintenir les liens entre les étudiants originaires d''Agnibilékrou.'
  WHEN title = 'Missions et Valeurs du CEERA' THEN 'Le CEERA a pour missions principales : 1) Rassembler et fédérer les élèves et étudiants ressortissants d''Agnibilékrou, 2) Créer un réseau d''entraide et de solidarité, 3) Promouvoir l''excellence académique, 4) Organiser des activités culturelles et éducatives, 5) Faciliter l''insertion professionnelle des membres. Les valeurs fondamentales sont la solidarité, l''excellence, l''entraide, le respect mutuel, et l''engagement communautaire.'
  WHEN title = 'Actions et Soutien du CEERA' THEN 'Le CEERA propose différentes formes de soutien : 1) Soutien académique avec tutorat et partage de ressources, 2) Soutien financier ponctuel pour les membres en difficulté, 3) Accompagnement dans l''orientation professionnelle, 4) Organisation d''événements de networking, 5) Mise en relation avec des anciens pour des opportunités d''emploi ou de stage, 6) Activités culturelles pour maintenir les liens avec Agnibilékrou, 7) Sessions de formation et de développement personnel.'
  ELSE category_info
END,
context_data = CASE 
  WHEN title = 'Histoire du CEERA' THEN '{"founded_date": "2023-02-03", "type": "association", "nature": "apolitique, laïque, à but non lucratif", "base_location": "Abidjan", "sections": ["Abidjan", "Bouaké"], "target_audience": "élèves et étudiants d''Agnibilékrou"}'::jsonb
  WHEN title = 'Missions et Valeurs du CEERA' THEN '{"main_missions": ["rassembler", "créer réseau", "promouvoir excellence", "organiser activités", "faciliter insertion"], "core_values": ["solidarité", "excellence", "entraide", "respect", "engagement"]}'::jsonb
  WHEN title = 'Actions et Soutien du CEERA' THEN '{"support_types": ["académique", "financier", "professionnel", "networking", "culturel", "formation"], "activities": ["tutorat", "aide financière", "orientation", "événements", "mise en relation"]}'::jsonb
  ELSE context_data
END;
