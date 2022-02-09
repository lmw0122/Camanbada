package com.web.curation.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.curation.model.entity.CampingBasicEntity;

public interface CampingBasicRepository extends JpaRepository<CampingBasicEntity, Integer>{

	List<CampingBasicEntity> findByFacltNmLike(String keyword);
	
}
