<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\HabitantRepository;

class InsertRecensementController extends AbstractController
{
    #[Route('/recensement/insert', name: 'app_insert_recensement')]
    public function index(HabitantRepository $habitantRepository): Response
    {
        return $this->render('insert_recensement/index.html.twig', [
            'controller_name' => 'ControlerReactController',
             //'habitants' => $habitantRepository->findAll(),
             'formulaire' =>''
          
            
        ]);

      
    }
}
