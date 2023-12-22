<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\HabitantRepository;

class InsertRecensementController extends AbstractController
{
    #[Route("/api/form", name:"api_form", methods:"POST")]
    /**
     * @Route("/api/form", name="api_form", methods={"POST"})
     */
    public function postForm(HabitantRepository $habitantRepository, Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);

        $form = new Habitant();
        $form->setNom($data['nom']);
        $form->setPrenom($data['prenom']);
        $form->setAdresse($data['adresse']);
        $form->setTelephone($data['telephone']);
        $form->setDate($data['date_naissance']);
        $form->setEmail($data['email']);
        
        $entityManager->persist($form);
        $entityManager->flush();

        return new Response('Form created successfully', Response::HTTP_CREATED);
    }
}
