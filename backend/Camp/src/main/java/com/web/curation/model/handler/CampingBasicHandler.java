package com.web.curation.model.handler;

import java.util.List;

import com.web.curation.model.dto.CampingBasicDTO;
import com.web.curation.model.entity.CampingBasicEntity;

public interface CampingBasicHandler {
	CampingBasicEntity saveOneCampingBasicEntity
	(CampingBasicDTO campingBasicDTO);
	CampingBasicEntity getOneCampingBasicEntity(Integer campId);
	List<CampingBasicEntity> getListCampingBasicEntity();
	List<CampingBasicEntity> getListCampingBasicByKeywordEntity(String Keyword);
}
