<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ControlerReactController extends AbstractController
{
    #[Route('/recensement', name: 'app_controler_react')]
    public function index(): Response
    {
        return $this->render('controler_react/index.html.twig', [
            'controller_name' => 'ControlerReactController',
            
        ]);
    }

    #[Route('/recensement/search_habitant', name: 'app_controle_search')]
    public function search(): Response
    {
        return $this->render('search_recensement/index.html.twig', [
            'controller_name' => 'ControlerReactController',
            
        ]);
    }
}
